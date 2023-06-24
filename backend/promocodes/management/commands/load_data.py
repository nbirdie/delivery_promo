import csv

from django.core.management.base import BaseCommand

from promocodes.models import PromoCode


class Command(BaseCommand):
    help = 'Load data from a CSV file to the database'

    def handle(self, *args, **options):
        with open("assets/promocodes.csv", 'r') as file:
            reader = csv.reader(file)
            next(reader)
            for row in reader:
                promocode = row[0]
                PromoCode.objects.get_or_create(
                    promocode=promocode,
                    is_used=False
                )
                self.stdout.write(self.style.SUCCESS(f'Successfully created PromoCode: {promocode}'))
