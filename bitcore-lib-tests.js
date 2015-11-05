Tinytest.add('Bitcore Library is correctly loaded', function (test) {
  test.equal(bitcore.version, 'v0.13.8');
});

Tinytest.add('Bitcore Library is working', function (test) {
  test.isTrue(bitcore.Address.isValid('126vMmY1fyznpZiFTTnty3cm1Rw8wuheev'));
});
