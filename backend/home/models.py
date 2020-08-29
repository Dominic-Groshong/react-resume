from django.db import models
from wagtail.core.fields import RichTextField, StreamField
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.api import APIField

from wagtail.core.blocks import (
    CharBlock,
    RichTextBlock,
    StreamBlock,
    StructBlock,
    ListBlock,
    BooleanBlock,
    DateBlock,
)

from wagtail.core.models import Page

from streams import blocks


class HomePage(Page):
    about = RichTextField()
    jobs = StreamField(
        [("job", blocks.JobExperianceBlock())],
        blank=True,
        verbose_name="Professional Experiance",
    )

    schools = StreamField(
        [("school", blocks.EducationBlock())],
        blank=True,
        verbose_name="Education",
    )
    specialties = StreamField(
        [("specialty", blocks.SpecialtiesBlock())],
        blank=True,
        verbose_name="Specialties",
    )
    skills = StreamField(
        [("skill", blocks.SkillsBlock())],
        blank=True,
        verbose_name="Skills",
    )

    content_panels = Page.content_panels + [
        FieldPanel("about"),
        StreamFieldPanel("jobs"),
        StreamFieldPanel("schools"),
        StreamFieldPanel("specialties"),
        StreamFieldPanel("skills"),
    ]

    api_fields = [
        APIField("about"),
        APIField("jobs"),
        APIField("schools"),
        APIField("specialties"),
        APIField("skills"),
    ]