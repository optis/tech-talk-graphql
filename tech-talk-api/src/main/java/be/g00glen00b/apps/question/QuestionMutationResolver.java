package be.g00glen00b.apps.question;

import be.g00glen00b.apps.post.Post;
import be.g00glen00b.apps.profile.Profile;
import be.g00glen00b.apps.profile.ProfileNotFoundException;
import be.g00glen00b.apps.profile.ProfileRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.ArrayList;

@Component
@AllArgsConstructor
public class QuestionMutationResolver implements GraphQLMutationResolver {
    private QuestionRepository questionRepository;
    private ProfileRepository profileRepository;

    public Question createQuestion(QuestionInput input) {
        Question question = questionRepository.save(new Question(null, input.getTitle(), new ArrayList<>()));
        Profile author = profileRepository.findById(1L).orElseThrow(() -> new ProfileNotFoundException(1L));
        Post post = new Post(null, input.getContent(), author, ZonedDateTime.now(), question, false);
        question.getPosts().add(post);
        return question;
    }
}
