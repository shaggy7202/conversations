from channels import Group
from conversations.models import Message


def user_connect(message):
    message.reply_channel.send({"accept": True})
    Group("chat").add(message.reply_channel)


def send_message_to_chat(message):
    new_message = Message.objects.create(message=message.content['text'])
    Group("chat").send({
        "text": "{}".format(new_message.message)
    })


def user_disconnect(message):
    Group("chat").discard(message.reply_channel)
