package be.g00glen00b.apps.post;

import lombok.Data;

@Data
public class PostInput {
    private Long questionId;
    private String content;
}
