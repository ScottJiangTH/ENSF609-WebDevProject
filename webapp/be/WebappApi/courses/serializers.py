from rest_framework import serializers 
from courses.models import Course
from courses.models import Outcome
from courses.models import GraduateAttribute
from courses.models import ContentCategory
from courses.models import Section
from courses.models import LabExperience
from courses.models import FinalGrade
from courses.models import LetterGrade
 
class CourseSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Course
        fields = ('courseNumber',
                  'courseName',
                  'courseDescription',
                  'academicCredit',
                  'lectureHours',
                  'labHours',
                  'refUrl',
                  )

class OutcomeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Outcome
        fields = ('oid',
                'description', 
                'courseNumber', 
                )

class GraduateAttributeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = GraduateAttribute
        fields = ('gid',
                'description', 
                'instructionLevel', 
                'oid',
                )

class ContentCategorySerializer(serializers.ModelSerializer):
 
    class Meta:
        model = ContentCategory
        fields = ('math1',
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
                'courseNumber', 
                )

class SectionSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Section
        fields = ('lectureSections', 
            'lectureHours', 
            'lectureNSPS', 
            'tutorialSections', 
            'tutorialHours', 
            'tutorialNSPS', 
            'labSections', 
            'lablHours', 
            'labNSPS', 
            'courseNumber', 
            )

class LabExperienceSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = LabExperience
        fields = ('labType',
                'numberOfLabs',
                'safetyTaught',
                'safetyExamined',
                'courseNumber', 
            )

class FinalGradeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = FinalGrade
        fields = ('assignmentsOutcomes',
                'assignmentsWeight',
                'projectOutcomes',
                'midtermOutcomes',
                'midtermWeight',
                'finalOutcomes',
                'finalWeight',
                'courseNumber', 
            )

class LetterGradeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = LetterGrade
        fields = ('apLow', 
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
                'courseNumber',
            )