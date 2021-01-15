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
        fields = ['gid',
                'outcome',
                'description', 
                'instructionLevel', 
                ]

class OutcomeSerializer(serializers.ModelSerializer):
    graduateAttributes = GraduateAttributeSerializer(many=True, read_only=True, source='graduateattribute_set')

    class Meta:
        model = Outcome
        fields = ['oid',
                'description', 
                'course', 
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
                'course', 
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
            'course', 
            ]

class LabExperienceSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = LabExperience
        fields = ['labType',
                'numberOfLabs',
                'safetyTaught',
                'safetyExamined',
                'course', 
                ]

class FinalGradeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = FinalGrade
        fields = ['assignmentsOutcomes',
                'assignmentsWeight',
                'projectOutcomes',
                'midtermOutcomes',
                'midtermWeight',
                'finalOutcomes',
                'finalWeight',
                'course', 
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
                'course',
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
        course = Course.objects.create(**validated_data)
        # temp_outcome = validated_data.pop('outcomes')
        # for i in temp_outcome:
        #     Outcome.objects.create(**i, courseNumber=new_course)
        temp_ContentCategory = validated_data.pop('contentCategory')
        ContentCategory.objects.create(**temp_ContentCategory, course=course)
        return new_course
