from wagtail.core.blocks import (
    CharBlock,
    RichTextBlock,
    StreamBlock,
    StructBlock,
    ListBlock,
    BooleanBlock,
    DateBlock,
)
from wagtail.images.blocks import ImageChooserBlock

from django.db import models


class JobExperianceBlock(StructBlock):
    company_name = CharBlock()
    job_title = CharBlock()
    location = CharBlock()
    start_date = DateBlock(help_text="The date you started working at this location")
    current = BooleanBlock(
        required=False,
        help_text="Select if you are currently still working at this location",
    )
    end_date = DateBlock(
        required=False, help_text="The date you quit working at this location"
    )
    job_discription = RichTextBlock()

    class Meta:
        form_classname = "job-experiance-list"
        icon = "fa-briefcase"


class EducationBlock(StructBlock):
    degree = CharBlock()
    school_name = CharBlock()
    location = CharBlock()
    start_date = DateBlock(help_text="The date you started attending this school")
    current = BooleanBlock(
        required=False,
        help_text="Select if you are currently still attending this school",
    )
    end_date = DateBlock(
        required=False, help_text="The date you graduated from this school"
    )
    major = CharBlock(help_text="The focus of your degree")

    class Meta:
        form_classname = "education-list"
        icon = "fa-graduation-cap"


class SpecialtiesBlock(StructBlock):
    image = ImageChooserBlock(required=False)
    specialty = CharBlock()

    class Meta:
        form_classname = "specialty-list"
        icon = "fa-diamond"


class SkillsBlock(StructBlock):
    skills_title = CharBlock(classname="full title")
    details = RichTextBlock()

    class Meta:
        form_classname = "skills-list"
        icon = "fa-list-ul"
