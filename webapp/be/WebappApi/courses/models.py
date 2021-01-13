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
    oid = models.ForeignKey(Outcome, on_delete=models.CASCADE)
    description = models.CharField(max_length=2000, null=True)
    instructionLevel = models.CharField(max_length=50, null=True)
    class Meta:
        unique_together = [
            ("gid", "oid"),
        ]

class ContentCategory(models.Model):
    math1 = models.CharField(max_length=20, blank=True, null=True)
    math2 = models.CharField(max_length=20, blank=True, null=True)
    mathAU = models.IntegerField(blank=True, null=True)
    ns1 = models.CharField(max_length=20, blank=True, null=True)
    ns2 = models.CharField(max_length=20, blank=True, null=True)
    nsAU = models.IntegerField(blank=True, null=True)
    cs1 = models.CharField(max_length=20, blank=True, null=True)
    cs2 = models.CharField(max_length=20, blank=True, null=True)
    csAU = models.IntegerField(blank=True, null=True)
    esAU = models.IntegerField(blank=True, null=True)
    edAU = models.IntegerField(blank=True, null=True)
    courseNumber = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)

class Section(models.Model):
    lectureSections = models.PositiveIntegerField(blank=True, null=True)
    lectureHours = models.PositiveIntegerField(blank=True, null=True)
    lectureNSPS = models.PositiveIntegerField(blank=True, null=True)
    tutorialSections = models.PositiveIntegerField(blank=True, null=True)
    tutorialHours = models.PositiveIntegerField(blank=True, null=True)
    tutorialNSPS = models.PositiveIntegerField(blank=True, null=True)
    labSections = models.PositiveIntegerField(blank=True, null=True)
    lablHours = models.PositiveIntegerField(blank=True, null=True)
    labNSPS = models.CharField(max_length=20, blank=True, null=True)
    courseNumber = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)

class LabExperience(models.Model):
    labType = models.CharField(max_length=20, null=False)
    numberOfLabs = models.PositiveIntegerField()
    safetyTaught = models.BooleanField()
    safetyExamined = models.BooleanField()
    courseNumber = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)

class FinalGrade(models.Model):
    assignmentsOutcomes = models.CharField(max_length=20, null=False)
    assignmentsWeight = models.PositiveIntegerField(null=False)
    projectOutcomes = models.CharField(max_length=20, null=False)
    projectWeight = models.PositiveIntegerField(null=False)
    midtermOutcomes = models.CharField(max_length=20, null=False)
    midtermWeight = models.PositiveIntegerField(null=False)
    finalOutcomes = models.CharField(max_length=20, null=False)
    finalWeight = models.PositiveIntegerField(null=False)
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
