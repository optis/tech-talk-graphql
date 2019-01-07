package be.g00glen00b.apps.post;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    private String id;
    private String content;
    private String authorId;
    private LocalDateTime postedAt;
    private String questionId;
    private boolean answer;

    public static Post answer(String content, String authorId, String questionId) {
        return new Post(null, content, authorId, LocalDateTime.now(), questionId, true);
    }

    public static Post firstPost(String content, String authorId, String questionId) {
        return new Post(null, content, authorId, LocalDateTime.now(), questionId, false);
    }
}
