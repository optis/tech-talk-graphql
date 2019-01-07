package be.g00glen00b.apps.question;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Question {
    @Id
    private String id;
    private String title;

    public static Question question(String title) {
        return new Question(null, title);
    }
}
