import json

from channels import Group
from channels.auth import channel_session_user, channel_session_user_from_http

from conversations.models import Message


@channel_session_user_from_http
def user_connect(message):
    message.reply_channel.send({"accept": True})
    Group("chat").add(message.reply_channel)
    messages = Message.objects.all()
    messages_data = {}
    for message_data in messages:
        messages_data[message_data.id] = {
            'username': message_data.author.username,
            'text': message_data.message
        }
    Group("chat").send({"text": json.dumps(messages_data)})


@channel_session_user
def send_message_to_chat(message):
    new_message = Message.objects.create(message=message.content['text'], author=message.user)
    message_data = {new_message.id: {
            'username': new_message.author.username,
            'text': new_message.message
        }
                    }
    Group("chat").send({"text": json.dumps(message_data)})


def user_disconnect(message):
    Group("chat").discard(message.reply_channel)
