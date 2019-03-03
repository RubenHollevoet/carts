<?php

namespace App\Controller\Api;

use App\Entity\Race;
use App\Service\HashGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/race", name="api")
 */
class raceController extends AbstractController
{
    /**
     * @Route("/create", name="app.race.create")
     */
    public function create(HashGenerator $hashGenerator)
    {
        $em = $this->getDoctrine()->getManager();

        $race = new Race();
        $race->setPublicAccesToken($hashGenerator->generatePublicHash());
        $race->setPrivateAccessCode($hashGenerator->generatePrivateHash());

        $em->persist($race);
        $em->flush();

        return $this->json([
            'status' => 'ok',
            'data' => [
                'publicAccessToken' => $race->getPublicAccesToken(),
                'privateAccessToken' => $race->getPrivateAccessCode(),
                'createdAt' => $race->getCreatedAt()->getTimestamp()
            ],
        ]);
    }

    /**
     * @param Request $request
     * @Route("/get", name="app.race.get")
     */
    public function get_(Request $request)
    {
        $requestData = json_decode($request->getContent());

        $race = $this->getRaceFromRequest($requestData);

        $response = [
            'publicAccessToken' => $race->getPublicAccesToken(),
            'privateAccessToken' => $race->getPrivateAccessCode(),
            'name' => $race->getName(),
            'createdAt' => $race->getCreatedAt()->getTimestamp()
        ];

        return $this->json([
            'status' => 'ok',
            'data' => $response
        ]);
    }

    /**
     * @Route("/update", name="app.race.update")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function update(Request $request)
    {
        $requestData = json_decode($request->getContent());
        $em = $this->getDoctrine()->getManager();

        $race = $this->getRaceFromRequest($requestData);

        if(isset($requestData->name)) {
            $race->setName($requestData->name);
        }

        $em->flush();

        return $this->json([
            'status' => 'ok',
            'data' => $requestData->privateAccessToken
        ]);
    }


    private function getRaceFromRequest($requestData) : Race {
        $em = $this->getDoctrine()->getManager();

        if(!isset($requestData->privateAccessToken)) {
            throw $this->createNotFoundException('parameter \'privateAccessToken\' is missing');
        }

        if(!$race = $em->getRepository(Race::class)->findOneBy(['privateAccessCode' => $requestData->privateAccessToken])) {
            throw $this->createNotFoundException('no race was found based on private access token');
        }

        return $race;
    }
}
