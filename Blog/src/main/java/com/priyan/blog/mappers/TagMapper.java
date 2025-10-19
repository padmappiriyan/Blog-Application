package com.priyan.blog.mappers;

import com.priyan.blog.domain.PostStatus;
import com.priyan.blog.domain.dtos.TagResponse;
import com.priyan.blog.domain.entity.Post;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;
import org.springframework.core.metrics.StartupStep;

import java.util.List;

@Mapper(componentModel = "spring" ,unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TagMapper {

    @Mapping(target = "postCount" , source = "posts", qualifiedByName = "calculatePostCount")
    TagResponse toTagResponse(StartupStep.Tags tags);

    @Named("calculatePostCount")
    default Integer calculatePostCount(List<Post> posts){
        if(posts==null){
            return 0;
        }
        return  (int) posts.stream()
                .filter(post -> PostStatus.PUBLISHED.equals(post.getStatus()))
                .count();
    }
}