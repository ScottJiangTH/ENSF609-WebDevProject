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
    oid = models.PositiveIntegerField()
    courseNumber = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.CharField(max_length=2000, null=False)
    class Meta:
        unique_together = [
            ("oid", "courseNumber"),
        ]

class GraduateAttribute(models.Model):
    gid = models.CharField(max_length=10, null=False)
    oid = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.CharField(max_length=2000, null=True)
    instructionLevel = models.CharField(max_length=50, null=True)
    class Meta:
        unique_together = [
            ("gid", "oid"),
        ]

class ContentCategory(models.Model):
    math1 = models.CharField(max_length=20, null=False)
    math2 = models.CharField(max_length=20, null=False)
    mathAU = models.PositiveIntegerField()
    ns1 = models.CharField(max_length=20, null=False)
    ns2 = models.CharField(max_length=20, null=False)
    nsAU = models.PositiveIntegerField()
    cs1 = models.CharField(max_length=20, null=False)
    cs2 = models.CharField(max_length=20, null=False)
    csAU = models.PositiveIntegerField()
    esAU = models.PositiveIntegerField()
    edAU = models.PositiveIntegerField()
    courseNumber = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)

class Section(models.Model):
    lectureSections = models.PositiveIntegerField()
    lectureHours = models.PositiveIntegerField()
    lectureNSPS = models.PositiveIntegerField()
    tutorialSections = models.PositiveIntegerField()
    tutorialHours = models.PositiveIntegerField()
    tutorialNSPS = models.PositiveIntegerField()
    labSections = models.PositiveIntegerField()
    lablHours = models.PositiveIntegerField()
    labNSPS = models.PositiveIntegerField()
    courseNumber = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)

class LabExperience(models.Model):
    labType = models.CharField(max_length=20, null=False)
    numberOfLabs = models.PositiveIntegerField()
    safetyTaught = models.BooleanField()
    safetyExamined = models.BooleanField()
    courseNumber = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)

class FinalGrade(models.Model):
    assignmentsOutcomes = models.CharField(max_length=20, null=False)
    assignmentsWeight = models.PositiveIntegerField()
    projectOutcomes = models.CharField(max_length=20, null=False)
    projectWeight = models.PositiveIntegerField
    midtermOutcomes = models.CharField(max_length=20, null=False)
    midtermWeight = models.PositiveIntegerField()
    finalOutcomes = models.CharField(max_length=20, null=False)
    finalWeight = models.PositiveIntegerField()
    courseNumber = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)

class LetterGrade(models.Model):
    apLow = models.PositiveIntegerField()
    apHigh = models.PositiveIntegerField()
    aLow = models.PositiveIntegerField()
    aHigh = models.PositiveIntegerField()
    amLow = models.PositiveIntegerField()
    amHigh = models.PositiveIntegerField()
    bpLow = models.PositiveIntegerField()
    bpHigh = models.PositiveIntegerField()
    bLow = models.PositiveIntegerField()
    bHigh = models.PositiveIntegerField()
    bmLow = models.PositiveIntegerField()
    bmHigh = models.PositiveIntegerField()
    cpLow = models.PositiveIntegerField()
    cpHigh = models.PositiveIntegerField()
    cLow = models.PositiveIntegerField()
    cHigh = models.PositiveIntegerField()
    cmLow = models.PositiveIntegerField()
    cmHigh = models.PositiveIntegerField()
    dpLow = models.PositiveIntegerField()
    dpHigh = models.PositiveIntegerField()
    dLow = models.PositiveIntegerField()
    dHigh = models.PositiveIntegerField()
    fLow = models.PositiveIntegerField()
    fHigh = models.PositiveIntegerField()
    courseNumber = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)
