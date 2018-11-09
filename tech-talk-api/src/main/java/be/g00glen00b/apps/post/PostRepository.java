package be.g00glen00b.apps.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long> {
    @Query("select count(p) from Post p inner join p.question q where q.id = ?1 and p.answer = ?2")
    int countPostsByQuestionAndAnswer(Long questionId, Boolean answer);

    @Query("select count(p) from Post p inner join p.author a where a.id = ?1 and p.answer = ?2")
    int countPostsByProfileAndAnswer(Long profileId, Boolean answer);
}
