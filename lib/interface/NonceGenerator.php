<?php

interface NonceGenerator {
	/*
	* public generate nonce
	*/
	public function generateNonce() : string;
}

?>