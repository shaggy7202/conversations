def serialize_messages(messages):
    serialized_messages = {}
    for message in messages:
        serialized_messages.update({
            message.author.username: message.message
        })
    return serialized_messages

