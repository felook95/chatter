package hu.martin.chatter.adapter.in.web.conversation;

import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

public interface FrontendHandler {

    Mono<ServerResponse> serveFrontend(ServerRequest serverRequest);
}
