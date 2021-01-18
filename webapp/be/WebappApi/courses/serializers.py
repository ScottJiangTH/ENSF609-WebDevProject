from rest_framework import serializers 
from courses.models import Course
from courses.models import Outcome
from courses.models import GraduateAttribute
from courses.models import ContentCategory
from courses.models import Section
from courses.models import LabExperience
from courses.models import FinalGrade
from courses.models import LetterGrade

class GraduateAttributeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = GraduateAttribute
        fields = [
                'gid',
                'description', 
                'instructionLevel', 
                ]

class OutcomeSerializer(serializers.ModelSerializer):
    graduateAttributes = GraduateAttributeSerializer(many=True, source='graduateattribute_set')

    class Meta:
        model = Outcome
        fields = [
                'description', 
                'graduateAttributes',
                ]

class ContentCategorySerializer(serializers.ModelSerializer):
 
    class Meta:
        model = ContentCategory
        fields = ['math1',
                'math2', 
                'mathAU', 
                'ns1', 
                'ns2', 
                'nsAU', 
                'cs1', 
                'cs2', 
                'csAU', 
                'esAU', 
                'edAU',
                ]

class SectionSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Section
        fields = ['lectureSections', 
            'lectureHours', 
            'lectureNSPS', 
            'tutorialSections', 
            'tutorialHours', 
            'tutorialNSPS', 
            'labSections', 
            'labHours', 
            'labNSPS',
            ]

class LabExperienceSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = LabExperience
        fields = ['labType',
                'numberOfLabs',
                'safetyTaught',
                'safetyExamined',
                ]

class FinalGradeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = FinalGrade
        fields = ['assignmentsOutcomes',
                'assignmentsWeight',
                'projectOutcomes',
                'projectWeight',
                'midtermOutcomes',
                'midtermWeight',
                'finalOutcomes',
                'finalWeight',
                ]

class LetterGradeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = LetterGrade
        fields = ['apLow', 
                'apHigh',
                'aLow',
                'aHigh',
                'amLow',
                'amHigh',
                'bpLow',
                'bpHigh',
                'bLow',
                'bHigh',
                'bmLow',
                'bmHigh',
                'cpLow',
                'cpHigh',
                'cLow',
                'cHigh',
                'cmLow',
                'cmHigh',
                'dpLow',
                'dpHigh',
                'dLow',
                'dHigh',
                'fLow',
                'fHigh',
                ]

class CourseSerializer(serializers.ModelSerializer):
    outcomes = OutcomeSerializer(many=True, source='outcome_set')
    contentCategory = ContentCategorySerializer(many=True, source='contentcategory_set')
    sections = SectionSerializer(many=True, source='section_set')
    labExperience = LabExperienceSerializer(many=True, source='labexperience_set')
    finalGrade = FinalGradeSerializer(many=True, source='finalgrade_set')
    letterGrade = LetterGradeSerializer(many=True, source='lettergrade_set')
    
    class Meta:
        model = Course
        fields = ['courseNumber',
                  'courseName',
                  'courseDescription',
                  'academicCredit',
                  'lectureHours',
                  'labHours',
                  'refUrl',
                  'outcomes',
                  'contentCategory',
                  'sections',
                  'labExperience',
                  'finalGrade',
                  'letterGrade',
                  ]
    
    def create(self, validated_data):
        outcomes_data = validated_data.pop('outcome_set')
        contentCategory_data = validated_data.pop('contentcategory_set')
        sections_data = validated_data.pop('section_set')
        labExperience_data = validated_data.pop('labexperience_set')
        finalGrades_data = validated_data.pop('finalgrade_set')
        letterGrades_data = validated_data.pop('lettergrade_set')

        course = Course.objects.create(**validated_data)

        for outcome_data in outcomes_data:
            graduateAttributes_data = outcome_data.pop('graduateattribute_set')
            outcome = Outcome.objects.create(course=course, **outcome_data)
            for graduateAttribute_data in graduateAttributes_data:
                GraduateAttribute.objects.create(outcome=outcome, **graduateAttribute_data)
        
        for i in contentCategory_data:
            ContentCategory.objects.create(course=course, **i)

        for section_data in sections_data:
            Section.objects.create(course=course, **section_data)

        for j in labExperience_data:
            LabExperience.objects.create(course=course, **j)

        for finalGrade_data in finalGrades_data:
            FinalGrade.objects.create(course=course, **finalGrade_data)

        for letterGrade_data in letterGrades_data:
            LetterGrade.objects.create(course=course, **letterGrade_data)
        
        return course