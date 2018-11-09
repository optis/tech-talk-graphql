package be.g00glen00b.apps.post;

import com.coxautodev.graphql.tools.GraphQLResolver;
import org.springframework.stereotype.Component;

@Component
public class PostResolver implements GraphQLResolver<Post> {

	private static final String EXCERPT_SUFFIX = "...";
	private static final int EXCERPT_LENGTH = 50;

	public String getExcerpt(Post post) {
		if (post.getContent() == null) {
			return null;
		} else if (post.getContent().length() < 50) {
			return post.getContent();
		} else {
			return post.getContent().substring(0, EXCERPT_LENGTH) + EXCERPT_SUFFIX;
		}
	}
}
