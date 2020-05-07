from django.apps import AppConfig


class UsermanagerConfig(AppConfig):
    name = 'userManager'

    def ready(self):
        import userManager.signals
