package tadiran.gateserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tadiran.gateserver.models.User;
import tadiran.gateserver.models.PinCode;

import java.time.Instant;
import java.util.List;
import java.util.Optional;


public interface PinCodeRepository extends JpaRepository<PinCode, Long> {
  Optional<PinCode> findByUser(User user);

  Boolean existsByUser(User user);

  /*List<PinCode> findByExpiryDateBefore(Instant instant);*/



/*
  default List<PinCode> getAllPinCodes() {
    try {
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      throw new RuntimeException(e);
    }
    return findAll();
  }*/
}
