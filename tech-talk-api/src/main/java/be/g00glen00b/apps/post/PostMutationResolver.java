package be.g00glen00b.apps.post;

import be.g00glen00b.apps.profile.Profile;
import be.g00glen00b.apps.profile.ProfileNotFoundException;
import be.g00glen00b.apps.profile.ProfileRepository;
import be.g00glen00b.apps.question.Question;
import be.g00glen00b.apps.question.QuestionNotFoundException;
import be.g00glen00b.apps.question.QuestionRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;

@Component
@AllArgsConstructor
public class PostMutationResolver implements GraphQLMutationResolver {
    private QuestionRepository questionRepository;
    private PostRepository postRepository;
    private ProfileRepository profileRepository;

    public Post createAnswer(PostInput input) {
        Question question = questionRepository
            .findById(input.getQuestionId())
            .orElseThrow(() -> new QuestionNotFoundException(input.getQuestionId()));
        Profile author = profileRepository.findById(1L).orElseThrow(() -> new ProfileNotFoundException(1L));
        Post post = new Post(null, input.getContent(), author, ZonedDateTime.now(), question, true);
        return postRepository.save(post);
    }
}
