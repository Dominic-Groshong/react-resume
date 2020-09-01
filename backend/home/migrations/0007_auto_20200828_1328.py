# Generated by Django 3.1 on 2020-08-28 20:28

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20200828_1316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='jobs',
            field=wagtail.core.fields.StreamField([('jobs_list', wagtail.core.blocks.StructBlock([('company_name', wagtail.core.blocks.CharBlock()), ('job_title', wagtail.core.blocks.CharBlock()), ('location', wagtail.core.blocks.CharBlock()), ('start_date', wagtail.core.blocks.DateBlock(help_text='The date you started working at this location')), ('current', wagtail.core.blocks.BooleanBlock(help_text='Select if you are currently still working at this location', required=False)), ('end_date', wagtail.core.blocks.DateBlock(help_text='The date you quit working at this location', required=False)), ('job_discription', wagtail.core.blocks.RichTextBlock())]))], blank=True),
        ),
    ]