import json

from django.views import View
from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin

from conversations.models import Message
from conversations.serializer import serialize_messages


class IndexPageView(LoginRequiredMixin, View):
    login_url = '/login/'

    def get(self, request):
        messages = serialize_messages(Message.objects.all())
        context = {
            'props': json.dumps(messages)
        }
        return render(request, 'index.html', context)
