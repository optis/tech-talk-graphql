package be.g00glen00b.apps.profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Profile {
    @Id
    private String id;
    private String username;
    private String title;
    private String email;
    private String bio;

    public static Profile profile(String username, String title, String email, String bio) {
        return new Profile(null, username, title, email, bio);
    }
}
