package hu.martin.chatter.adapter.in.web.conversation;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class FrontendRouter {

    @Bean
    RouterFunction<ServerResponse> frontendRoute(FrontendHandler frontendHandler) {
        return route()
                .GET("/", frontendHandler::serveFrontend)
                .build();
    }
}
