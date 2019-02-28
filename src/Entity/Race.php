<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Gedmo\SoftDeleteable\Traits\SoftDeleteableEntity;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Table(name="app_race")
 * @ORM\Entity(repositoryClass="App\Repository\RaceRepository")
 * @Gedmo\SoftDeleteable(fieldName="deletedAt")
 */
class Race
{

    use TimestampableEntity;
    use SoftDeleteableEntity;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $publicAccesToken;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $privateAccessCode;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Stopover", mappedBy="Race")
     */
    private $stopovers;

    public function __construct()
    {
        $this->stopovers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPublicAccesToken(): ?string
    {
        return $this->publicAccesToken;
    }

    public function setPublicAccesToken(string $publicAccesToken): self
    {
        $this->publicAccesToken = $publicAccesToken;

        return $this;
    }

    public function getPrivateAccessCode(): ?string
    {
        return $this->privateAccessCode;
    }

    public function setPrivateAccessCode(string $privateAccessCode): self
    {
        $this->privateAccessCode = $privateAccessCode;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Stopover[]
     */
    public function getStopovers(): Collection
    {
        return $this->stopovers;
    }

    public function addStopover(Stopover $stopover): self
    {
        if (!$this->stopovers->contains($stopover)) {
            $this->stopovers[] = $stopover;
            $stopover->setRace($this);
        }

        return $this;
    }

    public function removeStopover(Stopover $stopover): self
    {
        if ($this->stopovers->contains($stopover)) {
            $this->stopovers->removeElement($stopover);
            // set the owning side to null (unless already changed)
            if ($stopover->getRace() === $this) {
                $stopover->setRace(null);
            }
        }

        return $this;
    }
}
