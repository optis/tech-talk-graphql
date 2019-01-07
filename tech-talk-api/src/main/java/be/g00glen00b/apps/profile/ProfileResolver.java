package be.g00glen00b.apps.profile;

import be.g00glen00b.apps.post.PostRepository;
import com.coxautodev.graphql.tools.GraphQLResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;

import java.nio.charset.Charset;
import java.text.MessageFormat;

@Component
@AllArgsConstructor
public class ProfileResolver implements GraphQLResolver<Profile> {
    private static final String GRAVATAR_API = "https://www.gravatar.com/avatar/{0}?d=mp";
    private PostRepository postRepository;

    public Integer getAnswerCount(Profile author) {
        return postRepository.countByAuthorIdAndAnswer(author.getId(), true);
    }

    public Integer getQuestionCount(Profile profile) {
        return postRepository.countByAuthorIdAndAnswer(profile.getId(), false);
    }

    public String getAvatar(Profile profile) {
        String hash = DigestUtils.md5DigestAsHex(profile.getEmail().getBytes(Charset.defaultCharset()));
        return MessageFormat.format(GRAVATAR_API, hash);
    }
}
