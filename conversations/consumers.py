from channels import Group
from channels.auth import channel_session_user, channel_session_user_from_http

from conversations.models import Message


@channel_session_user_from_http
def user_connect(message):
    message.reply_channel.send({"accept": True})
    Group("chat").add(message.reply_channel)


@channel_session_user
def send_message_to_chat(message):
    new_message = Message.objects.create(message=message.content['text'], author=message.user)
    Group("chat").send({
        "text": "{}".format(new_message.message)
    })


def user_disconnect(message):
    Group("chat").discard(message.reply_channel)
