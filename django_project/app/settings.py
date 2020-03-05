from .env_settings.default import *

DJANGO_ENVIRONMENT = os.environ.get('ENVIRONMENT', 'NOT_SET').upper()
print('Environment variable is:', DJANGO_ENVIRONMENT)

if DJANGO_ENVIRONMENT == 'DEVELOP':
    print('If is [development] will take these settings: from .env_settings.develop import *')
    from .env_settings.develop import *

if DJANGO_ENVIRONMENT == 'QA':
    print('If is [qa] will take these settings: from .env_settings.qa import *')
    from .env_settings.qa import *

if DJANGO_ENVIRONMENT == 'MASTER':
    print('If is [master] will take these settings: from .env_settings.qa import *')
    from .env_settings.production import *
