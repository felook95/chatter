package hu.martin.chatter.adapter.in.web.conversation;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
public class DefaultFrontendHandler implements FrontendHandler {
    @Override
    public Mono<ServerResponse> serveFrontend(ServerRequest serverRequest) {
        return ServerResponse.ok().bodyValue(new ClassPathResource("static/index.html"));
    }
}
