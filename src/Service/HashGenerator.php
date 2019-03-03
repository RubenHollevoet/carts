<?php
/**
 * Created by PhpStorm.
 * User: ruben.hollevoet
 * Date: 28/02/19
 * Time: 22:11
 */

namespace App\Service;


class HashGenerator
{
    public function generatePublicHash() : string {
        return $this->generateRandomString(6);
    }

    public function generatePrivateHash() : string {
        return $this->generateRandomString(10);
    }

    public function generateQrHash() : string {
        return $this->generateRandomString(15,1);
    }

    private function generateRandomString($length = 10, $characterset = 0) {
        if($characterset === 0) {
            $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        else if($characterset === 1) {
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
