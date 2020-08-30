from .base import *

DEBUG = False

# Production Checklist Settings
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_BROWSER_XSS_FILTER = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True


STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
    "/var/www/static/",
]

try:
    from .local import *
except ImportError:
    pass
