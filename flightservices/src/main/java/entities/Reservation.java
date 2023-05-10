package entities;

import jakarta.persistence.Entity;

@Entity
public class Reservation extends AbstractEntity {

    private boolean checkIn;
    private int numberOfBags;

    public boolean isCheckIn() {
        return checkIn;
    }

    public void setCheckIn(boolean checkIn) {
        this.checkIn = checkIn;
    }

    public int getNumberOfBags() {
        return numberOfBags;
    }

    public void setNumberOfBags(int numberOfBags) {
        this.numberOfBags = numberOfBags;
    }

}
