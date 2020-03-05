from django.db import models

SEX_CHOICES = (
    (1, 'MALE'),
    (2, 'FEMALE'),
)


class Client(models.Model):
    class Meta:
        verbose_name = 'clients'

    name = models.CharField(max_length=255)
    identification = models.CharField(max_length=20)
    sex = models.PositiveIntegerField(choices=SEX_CHOICES)
    address = models.CharField(max_length=255)
    photo_url = models.CharField(max_length=255)
    