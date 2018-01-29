import json

from django.views import View
from django.shortcuts import render

from conversations.models import Message


class IndexPageView(View):
    def get(self, request):
        messages = Message.objects.all()
        context = {
            'props': json.dumps(messages)
        }
        return render(request, 'index.html', context)
