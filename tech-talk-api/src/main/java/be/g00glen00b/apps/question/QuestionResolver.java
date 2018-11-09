package be.g00glen00b.apps.question;

import be.g00glen00b.apps.post.Post;
import be.g00glen00b.apps.post.PostRepository;
import com.coxautodev.graphql.tools.GraphQLResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
@AllArgsConstructor
public class QuestionResolver implements GraphQLResolver<Question> {
    private PostRepository postRepository;

    public Post getFirstPost(Question question) {
        return Stream.of(question)
            .map(Question::getPosts)
            .flatMap(Collection::stream)
            .filter(post -> !post.isAnswer())
            .findAny().orElse(null);
    }

    public List<Post> getAnswers(Question question) {
        return Stream.of(question)
            .map(Question::getPosts)
            .flatMap(Collection::stream)
            .filter(Post::isAnswer)
            .collect(Collectors.toList());
    }

    public Integer getAnswerCount(Question question) {
        return postRepository.countPostsByQuestionAndAnswer(question.getId(), true);
    }
}
