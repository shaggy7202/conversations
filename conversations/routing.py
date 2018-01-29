from channels.routing import route
from conversations.consumers import user_connect, user_disconnect, send_message_to_chat

channel_routing = [
    route("websocket.connect", user_connect),
    route("websocket.receive", send_message_to_chat),
    route("websocket.disconnect", user_disconnect),
]
