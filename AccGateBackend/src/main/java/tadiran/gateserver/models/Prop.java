package tadiran.gateserver.models;


import lombok.*;

/**
 * <h2>BaseResponse</h2>
 *
 * @author aek
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Prop {
    private String propName;

    private String propValue;
}
