package be.g00glen00b.apps.post;

import be.g00glen00b.apps.SessionUtils;
import be.g00glen00b.apps.profile.Profile;
import be.g00glen00b.apps.profile.ProfileNotFoundException;
import be.g00glen00b.apps.profile.ProfileRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class PostMutationResolver implements GraphQLMutationResolver {
    private PostRepository postRepository;
    private ProfileRepository profileRepository;
    private SessionUtils sessionUtils;

    public Post createAnswer(PostInput input) {
        Profile author = profileRepository
            .findByEmail(sessionUtils.getEmail())
            .orElseThrow(ProfileNotFoundException::new);
        return postRepository.save(Post.answer(input.getContent(), author.getId(), input.getQuestionId()));
    }
}
