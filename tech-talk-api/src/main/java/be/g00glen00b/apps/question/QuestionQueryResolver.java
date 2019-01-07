package be.g00glen00b.apps.question;

import be.g00glen00b.apps.graphql.Pagination;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class QuestionQueryResolver implements GraphQLQueryResolver {
    private QuestionRepository questionRepository;

    public List<Question> getQuestions(Pagination pagination) {
        return questionRepository.findAll(PageRequest.of(pagination.getPage() - 1, pagination.getSize())).getContent();
    }

    public long getQuestionCount() {
        return questionRepository.count();
    }

    public Question getQuestion(String id) {
        return questionRepository.findById(id).orElseThrow(QuestionNotFoundException::new);
    }
}
