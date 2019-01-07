package be.g00glen00b.apps.post;

import be.g00glen00b.apps.profile.Profile;
import be.g00glen00b.apps.profile.ProfileNotFoundException;
import be.g00glen00b.apps.profile.ProfileRepository;
import com.coxautodev.graphql.tools.GraphQLResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class PostResolver implements GraphQLResolver<Post> {
	private ProfileRepository profileRepository;

	public Profile getAuthor(Post post) {
		return profileRepository.findById(post.getAuthorId()).orElseThrow(ProfileNotFoundException::new);
	}
}
