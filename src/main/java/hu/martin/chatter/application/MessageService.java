package hu.martin.chatter.application;

import hu.martin.chatter.domain.message.Message;
import hu.martin.chatter.domain.message.MessageContent;
import hu.martin.chatter.domain.message.MessageId;
import org.springframework.data.domain.PageRequest;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

public interface MessageService {

    Mono<Message> receiveMessage(Message message);

    Mono<Message> editMessageContent(MessageId id, MessageContent newContent);

    Flux<Message> findAllByIdOrderedByCreatedDateTime(List<MessageId> messageIdsToLookFor, PageRequest pageRequest);
}
