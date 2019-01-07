package be.g00glen00b.apps.question;

import be.g00glen00b.apps.SessionUtils;
import be.g00glen00b.apps.post.Post;
import be.g00glen00b.apps.post.PostRepository;
import be.g00glen00b.apps.profile.Profile;
import be.g00glen00b.apps.profile.ProfileNotFoundException;
import be.g00glen00b.apps.profile.ProfileRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@AllArgsConstructor
public class QuestionMutationResolver implements GraphQLMutationResolver {
    private QuestionRepository questionRepository;
    private PostRepository postRepository;
    private ProfileRepository profileRepository;
    private SessionUtils sessionUtils;

    public Question createQuestion(QuestionInput input) {
        Question question = questionRepository.save(Question.question(input.getTitle()));
        Profile author = profileRepository
            .findByEmail(sessionUtils.getEmail())
            .orElseThrow(ProfileNotFoundException::new);
        postRepository.save(Post.firstPost(input.getContent(), author.getId(), question.getId()));
        return question;
    }
}
