# Generated by Django 3.1.5 on 2021-01-15 04:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('courseNumber', models.CharField(max_length=70)),
                ('courseName', models.CharField(max_length=500)),
                ('courseDescription', models.CharField(max_length=2000, null=True)),
                ('academicCredit', models.PositiveIntegerField()),
                ('lectureHours', models.PositiveIntegerField()),
                ('labHours', models.PositiveIntegerField()),
                ('refUrl', models.CharField(max_length=2000, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lectureSections', models.PositiveIntegerField(blank=True, null=True)),
                ('lectureHours', models.PositiveIntegerField(blank=True, null=True)),
                ('lectureNSPS', models.PositiveIntegerField(blank=True, null=True)),
                ('tutorialSections', models.PositiveIntegerField(blank=True, null=True)),
                ('tutorialHours', models.PositiveIntegerField(blank=True, null=True)),
                ('tutorialNSPS', models.PositiveIntegerField(blank=True, null=True)),
                ('labSections', models.PositiveIntegerField(blank=True, null=True)),
                ('labHours', models.PositiveIntegerField(blank=True, null=True)),
                ('labNSPS', models.CharField(blank=True, max_length=20, null=True)),
                ('course', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='courses.course')),
            ],
        ),
        migrations.CreateModel(
            name='Outcome',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('oid', models.PositiveIntegerField()),
                ('description', models.CharField(max_length=2000)),
                ('course', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='courses.course')),
            ],
            options={
                'unique_together': {('oid', 'course')},
            },
        ),
        migrations.CreateModel(
            name='LetterGrade',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('apLow', models.PositiveIntegerField()),
                ('apHigh', models.PositiveIntegerField()),
                ('aLow', models.PositiveIntegerField()),
                ('aHigh', models.PositiveIntegerField()),
                ('amLow', models.PositiveIntegerField()),
                ('amHigh', models.PositiveIntegerField()),
                ('bpLow', models.PositiveIntegerField()),
                ('bpHigh', models.PositiveIntegerField()),
                ('bLow', models.PositiveIntegerField()),
                ('bHigh', models.PositiveIntegerField()),
                ('bmLow', models.PositiveIntegerField()),
                ('bmHigh', models.PositiveIntegerField()),
                ('cpLow', models.PositiveIntegerField()),
                ('cpHigh', models.PositiveIntegerField()),
                ('cLow', models.PositiveIntegerField()),
                ('cHigh', models.PositiveIntegerField()),
                ('cmLow', models.PositiveIntegerField()),
                ('cmHigh', models.PositiveIntegerField()),
                ('dpLow', models.PositiveIntegerField()),
                ('dpHigh', models.PositiveIntegerField()),
                ('dLow', models.PositiveIntegerField()),
                ('dHigh', models.PositiveIntegerField()),
                ('fLow', models.PositiveIntegerField()),
                ('fHigh', models.PositiveIntegerField()),
                ('course', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='courses.course')),
            ],
        ),
        migrations.CreateModel(
            name='LabExperience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('labType', models.CharField(max_length=20)),
                ('numberOfLabs', models.PositiveIntegerField()),
                ('safetyTaught', models.BooleanField()),
                ('safetyExamined', models.BooleanField()),
                ('course', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='courses.course')),
            ],
        ),
        migrations.CreateModel(
            name='FinalGrade',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('assignmentsOutcomes', models.CharField(max_length=20)),
                ('assignmentsWeight', models.PositiveIntegerField()),
                ('projectOutcomes', models.CharField(max_length=20)),
                ('projectWeight', models.PositiveIntegerField()),
                ('midtermOutcomes', models.CharField(max_length=20)),
                ('midtermWeight', models.PositiveIntegerField()),
                ('finalOutcomes', models.CharField(max_length=20)),
                ('finalWeight', models.PositiveIntegerField()),
                ('course', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='courses.course')),
            ],
        ),
        migrations.CreateModel(
            name='ContentCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('math1', models.CharField(blank=True, max_length=20, null=True)),
                ('math2', models.CharField(blank=True, max_length=20, null=True)),
                ('mathAU', models.IntegerField(blank=True, null=True)),
                ('ns1', models.CharField(blank=True, max_length=20, null=True)),
                ('ns2', models.CharField(blank=True, max_length=20, null=True)),
                ('nsAU', models.IntegerField(blank=True, null=True)),
                ('cs1', models.CharField(blank=True, max_length=20, null=True)),
                ('cs2', models.CharField(blank=True, max_length=20, null=True)),
                ('csAU', models.IntegerField(blank=True, null=True)),
                ('esAU', models.IntegerField(blank=True, null=True)),
                ('edAU', models.IntegerField(blank=True, null=True)),
                ('course', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='courses.course')),
            ],
        ),
        migrations.CreateModel(
            name='GraduateAttribute',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gid', models.CharField(max_length=10)),
                ('description', models.CharField(max_length=2000, null=True)),
                ('instructionLevel', models.CharField(max_length=50, null=True)),
                ('outcome', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='courses.outcome')),
            ],
            options={
                'unique_together': {('gid', 'outcome')},
            },
        ),
    ]
