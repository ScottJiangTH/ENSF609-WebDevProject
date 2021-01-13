from django.contrib import admin
from courses.models import Course
from courses.models import Outcome
from courses.models import GraduateAttribute
from courses.models import ContentCategory
from courses.models import Section
from courses.models import LabExperience
from courses.models import FinalGrade
from courses.models import LetterGrade

admin.site.register(Course)
admin.site.register(Outcome)
admin.site.register(GraduateAttribute)
admin.site.register(ContentCategory)
admin.site.register(Section)
admin.site.register(LabExperience)
admin.site.register(FinalGrade)
admin.site.register(LetterGrade)