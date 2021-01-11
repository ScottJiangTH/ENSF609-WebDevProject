from django.db import models

class Course(models.Model):
    courseNumber = models.CharField(max_length=70, null=False, primary_key=True)
    courseName = models.CharField(max_length=500, null=False)
    courseDescription = models.CharField(max_length=2000, null=True)
    academicCredit = models.PositiveIntegerField(null=False)
    lectureHours = models.PositiveIntegerField(null=False)
    labHours = models.PositiveIntegerField(null=False)
    refUrl = models.CharField(max_length=2000, null=True)

class Outcome(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    description = models.CharField(max_length=2000, null=False)
    courseNumber = models.ForeignKey(Course, on_delete=models.CASCADE, primary_key=True)

class GraduateAttribute(models.Model):
    id = models.CharField(max_length=10, null=False, primary_key=True)
    courseNumber = models.ForeignKey(Course, on_delete=models.CASCADE, primary_key=True)
    oid = models.ForeignKey(Outcome, on_delete=models.CASCADE, primary_key=True)
    description = models.CharField(max_length=2000, null=True)
    instructionLevel = models.CharField(max_length=50, null=True)

# to be continued