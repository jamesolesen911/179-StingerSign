"""
Definition of models.
"""

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# created a table for admin settings
class admin_settings(models.Model):
    # column name = specify column type
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45)
    value = models.BooleanField(True)
    class Meta:
        """
        This is meta data for the table
        """
        db_table="admin_settings"
    # some older settings:
    # allow_parsing = models.BooleanField(True)
    # allow_inventory_changes = models.BooleanField(True)

class test_settings(models.Model):
    # column name = specify column type
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45)
    value = models.BooleanField(True)
    class Meta:
        """
        This is meta data for the table
        """
        db_table="test_settings"
    # some older settings:
    # allow_parsing = models.BooleanField(True)
    # allow_inventory_changes = models.BooleanField(True)

class another_test_settings(models.Model):
    # column name = specify column type
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45)
    value = models.BooleanField(True)
    value2 = models.BooleanField(True)
    class Meta:
        """
        This is meta data for the table
        """
        db_table="another_test_settings"


class user_settings(models.Model):
    # auth_user is from django
    user = models.ForeignKey(User, unique=True, primary_key=True, on_delete=models.CASCADE)
    show_alerts = models.BooleanField(True)

    class Meta:
        """
        This is meta data for the table
        """
    db_table="user_settings"

class recent_alerts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=45)
    class Meta:

        db_table="recent_alerts"

    
