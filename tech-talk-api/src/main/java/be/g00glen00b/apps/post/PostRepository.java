package be.g00glen00b.apps.post;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {
    int countByQuestionIdAndAnswer(String questionId, Boolean answer);
    int countByAuthorIdAndAnswer(String authorId, Boolean answer);
    List<Post> findByQuestionIdAndAnswer(String questionId, Boolean answer);
}
