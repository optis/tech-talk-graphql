package be.g00glen00b.apps.profile;

import be.g00glen00b.apps.graphql.Pagination;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class ProfileQueryResolver implements GraphQLQueryResolver {
    private ProfileRepository profileRepository;

    public Profile getProfile(Long id) {
        return profileRepository.findById(id).orElseThrow(() -> new ProfileNotFoundException(id));
    }

    public List<Profile> getProfiles(Pagination pagination) {
        return profileRepository.findAll(PageRequest.of(pagination.getPage() - 1, pagination.getSize())).getContent();
    }

    public long getProfileCount() {
        return profileRepository.count();
    }
}
