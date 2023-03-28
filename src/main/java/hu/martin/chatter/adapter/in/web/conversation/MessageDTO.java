package hu.martin.chatter.adapter.in.web.conversation;

import hu.martin.chatter.domain.message.*;
import hu.martin.chatter.domain.participant.ParticipantId;

import java.math.BigInteger;
import java.time.LocalDateTime;

public record MessageDTO(BigInteger id, BigInteger senderId, String content, String statusFlag,
                         LocalDateTime createdDateTime) {

    public static MessageDTO from(Message message) {
        return new MessageDTO(
                message.id() == null ? null : message.id().id(),
                message.sender().id(),
                message.content().content(),
                message.statusFlag().name(),
                message.createdDateTime().createdDateTime());
    }

    public Message asMessage() {
        Message message = new Message(
                ParticipantId.of(senderId),
                MessageContent.of(content),
                CreatedDateTime.of(createdDateTime)
        );
        if (statusFlag != null) {
            message.changeStatusFlagTo(MessageStatus.valueOf(statusFlag));
        }
        if (id != null) {
            message.changeIdTo(MessageId.of(id));
        }
        return message;
    }
}
